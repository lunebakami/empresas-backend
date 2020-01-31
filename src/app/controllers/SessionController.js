import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail!' });
    }

    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).json({ error: "User doesn't exists!" });
    }

    if (!(await user.checkPassword(req.body.password))) {
      return res.status(401).json({ error: 'Password does not match!' });
    }

    const { id, email } = user;

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    res.set('access-token', token);
    res.set('client', email);
    res.set('uid', id);

    return res.json({
      user: {
        id,
        email,
      },
    });
  }
}

export default new SessionController();
