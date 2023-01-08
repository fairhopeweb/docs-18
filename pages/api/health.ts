import type { NextApiHandler } from 'next';

const health: NextApiHandler = (req, res) => {
  res.status(200).json({ ok: 1 });
};

// eslint-disable-next-line import/no-default-export
export default health;
