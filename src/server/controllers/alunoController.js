const Aluno = require("../models/Aluno");
const mongoose = require("mongoose");

/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {

    const messages = await req.consumeFlash('info');
    const locals = {
      title: 'NodeJs',
      description: 'Free NodeJs User Management System'
    }

    let perPage = 12;
    let page = req.query.page || 1;

    try {
      const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec(); 
      const count = await Aluno.count();

      res.render('index', {
        locals,
        alunos,
        current: page,
        pages: Math.ceil(count / perPage),
        messages
      });

    } catch (error) {
      console.log(error);
    }
}

/**
 * GET /
 * About
 */
exports.about = async (req, res) => {
    const locals = {
      title: 'About',
      description: 'Free NodeJs User Management System'
    }

    try {
      res.render('about', locals );
    } catch (error) {
      console.log(error);
    }
}






/**
 * GET /
 * New Aluno Form
 */
exports.addAluno = async (req, res) => {
  const locals = {
    title: "Add New Aluno - NodeJs",
    description: "Free NodeJs User Management System",
  };

  res.render("aluno/add", locals);
};

/**
 * POST /
 * Create New Aluno
 */
exports.postAluno = async (req, res) => {
  console.log(req.body);

  const newAluno = new Aluno({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    details: req.body.details,
    tel: req.body.tel,
    email: req.body.email,
  });

  try {
    await Aluno.create(newAluno);
    await req.flash("info", "Novo aluno foi adicionado.");

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};


/**
 * GET /
 * Aluno Data 
*/
exports.view = async (req, res) => {

  try {
    const aluno = await Aluno.findOne({ _id: req.params.id })

    const locals = {
      title: "View Aluno Data",
      description: "Free NodeJs User Management System",
    };

    res.render('aluno/view', {
      locals,
      aluno
    })

  } catch (error) {
    console.log(error);
  }

}



/**
 * GET /
 * Edit Aluno Data 
*/
exports.edit = async (req, res) => {

  try {
    const aluno = await Aluno.findOne({ _id: req.params.id })

    const locals = {
      title: "Edit Aluno Data",
      description: "Free NodeJs User Management System",
    };

    res.render('aluno/edit', {
      locals,
      aluno
    })

  } catch (error) {
    console.log(error);
  }

}




/**
 * GET /
 * Update Aluno Data 
*/
exports.editPost = async (req, res) => {
  try {
    await Aluno.findByIdAndUpdate(req.params.id,{
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      tel: req.body.tel,
      email: req.body.email,
      details: req.body.details,
      updatedAt: Date.now()
    });
    await res.redirect(`/edit/${req.params.id}`);
    
    console.log('redirected');
  } catch (error) {
    console.log(error);
  }
}


/**
 * Delete /
 * Delete Aluno Data 
*/
exports.deleteAluno = async (req, res) => {
  try {
    await Aluno.deleteOne({ _id: req.params.id });
    res.redirect("/")
  } catch (error) {
    console.log(error);
  }
}


/**
 * Get /
 * Search Aluno Data 
*/
exports.searchAlunos = async (req, res) => {

  const locals = {
    title: "Search Aluno Data",
    description: "Free NodeJs User Management System",
  };

  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const alunos = await Aluno.find({
      $or: [
        { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") }},
        { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") }},
      ]
    });

    res.render("search", {
      alunos,
      locals
    })
    
  } catch (error) {
    console.log(error);
  }

}