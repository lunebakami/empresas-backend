import Enterprise from '../models/Enterprise';

class EnterpriseController {
  async index(req, res) {
    const { enterprise_types, name } = req.query;

    if (!enterprise_types || !name) {
      const enterprises = await Enterprise.findAll({});
      return res.json(enterprises);
    }

    const enterprisesWithFilter = await Enterprise.findAll({
      where: {
        type_id: enterprise_types,
        name,
      },
    });

    return res.json(enterprisesWithFilter);
  }

  async show(req, res) {
    const { id } = req.params;

    const enterprise = await Enterprise.findByPk(id);

    if (!enterprise) {
      return res.status(400).json({ error: "Enteprise doesn't exists" });
    }

    return res.json(enterprise);
  }
}

export default new EnterpriseController();
