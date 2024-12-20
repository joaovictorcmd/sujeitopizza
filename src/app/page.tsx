import styles from './page.module.scss'
import Image from 'next/image';
import logoImg from '/public/logo.svg'
import Link from 'next/link';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';

export default function Home() {

  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "" || password === "") {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password
      })

      console.log(response.data);

    } catch (error) {
      console.log(`Error: ${error}`);
      return;
    }

    redirect("/dashboard");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo da Pizzaria"
        />

        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              required
              name='email'
              placeholder='Email'
              className={styles.input}
            />

            <input
              type="password"
              required
              name='password'
              placeholder='Senha'
              className={styles.input}
            />

            <button type="submit">
              Acessar
            </button>
          </form>

          <Link href={"/signup"} className={styles.text}>
            Não possui uma conta? Criar conta
          </Link>

        </section>

      </div>
    </>
  );
}