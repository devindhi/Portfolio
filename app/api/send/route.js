import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'Devindhi <devindhigurusinghe@gmail.com>',
    to: ['devindhigurusinghe@gmail.com'],
    subject: 'Hello world',
    react: <>
      <p>Email body</p>
    </>,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
