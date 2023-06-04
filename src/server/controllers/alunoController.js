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

    let perPage = 500;
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
 * Chamada
 */

exports.chamada = async (req, res) => {
  const messages2 = await req.consumeFlash('falta');
    const locals = {
      title: 'Chamada',
      description: 'Free NodeJs User Management System'
    }

    let perPage = 500;
    let page = req.query.page || 1;

    try {
      const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec(); 
      const count = await Aluno.count();

      res.render('chamada', {
        locals,
        alunos,
        current: page,
        pages: Math.ceil(count / perPage),
        messages2
      });

    } catch (error) {
      console.log(error);
    }
}

exports.relatorio = async (req, res) => {
    const locals = {
      title: 'Relatório',
      description: 'Free NodeJs User Management System'
    }

    let perPage = 500;
    let page = req.query.page || 1;

    try {
      const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec(); 
      const count = await Aluno.count();

      res.render('relatorio', {
        locals,
        alunos,
        current: page,
        pages: Math.ceil(count / perPage),
      });

    } catch (error) {
      console.log(error);
    }
}

exports.relatorioMat = async (req, res) => {
  const locals = {
    title: 'Relatório Matemática',
    description: 'Free NodeJs User Management System'
  }

  let perPage = 500;
  let page = req.query.page || 1;

  try {
    const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
    const count = await Aluno.count();

    res.render('relatorioMat', {
      locals,
      alunos,
      current: page,
      pages: Math.ceil(count / perPage),
    });

  } catch (error) {
    console.log(error);
  }
}

exports.relatorioHist = async (req, res) => {
  const locals = {
    title: 'Relatório História',
    description: 'Free NodeJs User Management System'
  }

  let perPage = 500;
  let page = req.query.page || 1;

  try {
    const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
    const count = await Aluno.count();

    res.render('relatorioHist', {
      locals,
      alunos,
      current: page,
      pages: Math.ceil(count / perPage),
    });

  } catch (error) {
    console.log(error);
  }
}

exports.relatorioPort = async (req, res) => {
  const locals = {
    title: 'Relatório Português',
    description: 'Free NodeJs User Management System'
  }

  let perPage = 500;
  let page = req.query.page || 1;

  try {
    const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
    const count = await Aluno.count();

    res.render('relatorioPort', {
      locals,
      alunos,
      current: page,
      pages: Math.ceil(count / perPage),
    });

  } catch (error) {
    console.log(error);
  }
}

exports.relatorioBio = async (req, res) => {
  const locals = {
    title: 'Relatório Biologia',
    description: 'Free NodeJs User Management System'
  }

  let perPage = 500;
  let page = req.query.page || 1;

  try {
    const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
    const count = await Aluno.count();

    res.render('relatorioBio', {
      locals,
      alunos,
      current: page,
      pages: Math.ceil(count / perPage),
    });

  } catch (error) {
    console.log(error);
  }
}

exports.relatorioQuim = async (req, res) => {
  const locals = {
    title: 'Relatório Química',
    description: 'Free NodeJs User Management System'
  }

  let perPage = 500;
  let page = req.query.page || 1;

  try {
    const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
    const count = await Aluno.count();

    res.render('relatorioQuim', {
      locals,
      alunos,
      current: page,
      pages: Math.ceil(count / perPage),
    });

  } catch (error) {
    console.log(error);
  }
}

exports.relatorioFilo = async (req, res) => {
  const locals = {
    title: 'Relatório Filosofia',
    description: 'Free NodeJs User Management System'
  }

  let perPage = 500;
  let page = req.query.page || 1;

  try {
    const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
    const count = await Aluno.count();

    res.render('relatorioFilo', {
      locals,
      alunos,
      current: page,
      pages: Math.ceil(count / perPage),
    });

  } catch (error) {
    console.log(error);
  }
}

exports.relatorioFis = async (req, res) => {
  const locals = {
    title: 'Relatório Física',
    description: 'Free NodeJs User Management System'
  }

  let perPage = 500;
  let page = req.query.page || 1;

  try {
    const alunos = await Aluno.aggregate([ { $sort: { createdAt: -1 } } ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
    const count = await Aluno.count();

    res.render('relatorioFis', {
      locals,
      alunos,
      current: page,
      pages: Math.ceil(count / perPage),
    });

  } catch (error) {
    console.log(error);
  }
}

exports.enviarNotificacao = async (req, res) => {

  try {
    const aluno = await Aluno.findOne({ _id: req.params.id })

    const locals = {
      title: "Enviar Notificacao",
      description: "Free NodeJs User Management System",
    };

    res.render('enviarNotificacao', {
      locals,
      aluno
    })

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
    await req.flash("info", "O aluno "+ newAluno.firstName + " "+ newAluno.lastName + " foi adicionado na lista.");

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
    res.redirect("/");
    
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

exports.addFaltaPage = async (req, res) => {

  try {
    const aluno = await Aluno.findOne({ _id: req.params.id })

    const locals = {
      title: "Give Aluno Falta",
      description: "Free NodeJs User Management System",
    };

    res.render('aluno/addFaltaPage', {
      locals,
      aluno
    })

  } catch (error) {
    console.log(error);
  }

}

exports.adicionarFaltaMat = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    aluno.faltasMat++;
    await aluno.save();
    await req.flash("falta", "Falta do aluno "+ aluno.firstName + " " + aluno.lastName +" na disciplina de Matemática foi adicionada.");
    res.redirect("/chamada");
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar falta');
  }
};

exports.adicionarFaltaHist = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    aluno.faltasHist++;
    await aluno.save();
    await req.flash("falta", "Falta do aluno "+ aluno.firstName + " " + aluno.lastName +" na disciplina de História foi adicionada.");
    res.redirect("/chamada");
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar falta');
  }
};

exports.adicionarFaltaPort = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    aluno.faltasPort++;
    await aluno.save();
    await req.flash("falta", "Falta do aluno "+ aluno.firstName + " " + aluno.lastName +" na disciplina de Português foi adicionada.");
    res.redirect("/chamada");
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar falta');
  }
};

exports.adicionarFaltaBio = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    aluno.faltasBio++;
    await aluno.save();
    await req.flash("falta", "Falta do aluno "+ aluno.firstName + " " + aluno.lastName +" na disciplina de Biologia foi adicionada.");
    res.redirect("/chamada");
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar falta');
  }
};

exports.adicionarFaltaQuim = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    aluno.faltasQuim++;
    await aluno.save();
    await req.flash("falta", "Falta do aluno "+ aluno.firstName + " " + aluno.lastName +" na disciplina de Química foi adicionada.");
    res.redirect("/chamada");
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar falta');
  }
};

exports.adicionarFaltaFilo = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    aluno.faltasFilo++;
    await aluno.save();
    await req.flash("falta", "Falta do aluno "+ aluno.firstName + " " + aluno.lastName +" na disciplina de Filosofia foi adicionada.");
    res.redirect("/chamada");
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar falta');
  }
};

exports.adicionarFaltaFis = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    aluno.faltasFis++;
    await aluno.save();
    await req.flash("falta", "Falta do aluno "+ aluno.firstName + " " + aluno.lastName +" na disciplina de Física foi adicionada.");
    res.redirect("/chamada");
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar falta');
  }
};