import Image from "next/image";
import Head from "next/head";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between py-24 px-20">
        <p className="text-7xl text-white">
          Hello! My name is <span className="text-sky-400">Blizzard</span> and I
          am a{" "}
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Full Stack Web Developer.{" "}
          </span>
        </p>
        <div>
          <p className="text-4xl text-white mt-24">Technologies I Use</p>
          <div className="flex flex-wrap">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              height={65}
              width={65}
              alt="Typescript"
            />{" "}
            <i className="devicon-nextjs-original text-white text-7xl" />
            <Image src="/Vite.js.png" height={65} width={65} alt="Vite" />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              height={65}
              width={65}
              alt="React"
            />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
              height={65}
              width={65}
              alt="DigitalOcean"
            />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
              height={65}
              width={65}
              alt="Laravel"
            />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              height={65}
              width={65}
              alt="Node.js"
            />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              height={65}
              width={65}
              alt="PHP"
            />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              height={65}
              width={65}
              alt="PostgreSQL"
            />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              height={65}
              width={65}
              alt="TailwindCSS"
            />{" "}
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              height={65}
              width={65}
              alt="VSCode"
            />{" "}
          </div>
        </div>
        <div>
          {" "}
          <p className="text-4xl text-white mt-24">Projects</p>
          <div className="flex flex-wrap gap-1">
            <Card className="w-[33%] bg-slate-900 text-white border-none rounded-none">
              <CardHeader>
                <CardTitle>Antarctica</CardTitle>
                <CardDescription>A Twitter/Bluesky Clone</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://antarctica.notblizzard.dev" target="_blank">
                  <Image
                    src="/antarctica.png"
                    width={1000}
                    height={1000}
                    alt="antarctica"
                  />
                </Link>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col">
                  <p>Technologies used</p>
                  <div className="flex flex-row">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      height={30}
                      width={30}
                      alt="Typescript"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      height={30}
                      width={30}
                      alt="Next.js"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      height={30}
                      width={30}
                      alt="React"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                      height={30}
                      width={30}
                      alt="DigitalOcean"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      height={30}
                      width={30}
                      alt="PostgreSQL"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      height={30}
                      width={30}
                      alt="TailwindCSS"
                    />{" "}
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="w-[33%] bg-slate-900 text-white border-none rounded-none">
              <CardHeader>
                <CardTitle>K2</CardTitle>
                <CardDescription>A simple URL shortener</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://k2.notblizzard.dev" target="_blank">
                  <Image src="/k2.png" width={1000} height={1000} alt="k2" />
                </Link>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col">
                  <p>Technologies used</p>
                  <div className="flex flex-row">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      height={30}
                      width={30}
                      alt="Typescript"
                    />{" "}
                    <Image
                      src="/Vite.js.png"
                      height={30}
                      width={30}
                      alt="Vite"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      height={30}
                      width={30}
                      alt="React"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                      height={30}
                      width={30}
                      alt="DigitalOcean"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      height={30}
                      width={30}
                      alt="PostgreSQL"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      height={30}
                      width={30}
                      alt="TailwindCSS"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      height={30}
                      width={30}
                      alt="Python"
                    />{" "}
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="w-[33%] bg-slate-900 text-white border-none rounded-none">
              <CardHeader>
                <CardTitle>Everest</CardTitle>
                <CardDescription>A Deviantart clone</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://everest.notblizzard.dev" target="_blank">
                  <Image
                    src="/everest.png"
                    width={1000}
                    height={1000}
                    alt="everest"
                  />
                </Link>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col">
                  <p>Technologies used</p>
                  <div className="flex flex-row">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      height={30}
                      width={30}
                      alt="Typescript"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                      height={30}
                      width={30}
                      alt="PHP"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
                      height={30}
                      width={30}
                      alt="Laravel"
                    />{" "}
                    <Image
                      src="/Vite.js.png"
                      height={30}
                      width={30}
                      alt="Vite"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      height={30}
                      width={30}
                      alt="React"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                      height={30}
                      width={30}
                      alt="DigitalOcean"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      height={30}
                      width={30}
                      alt="PostgreSQL"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      height={30}
                      width={30}
                      alt="TailwindCSS"
                    />{" "}
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="w-[33%] bg-slate-900 text-white border-none rounded-none">
              <CardHeader>
                <CardTitle>Alaska</CardTitle>
                <CardDescription>A Medium clone</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="https://alaska.notblizzard.dev" target="_blank">
                  <Image
                    src="/alaska.png"
                    width={1000}
                    height={1000}
                    alt="k2"
                  />
                </Link>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col">
                  <p>Technologies used</p>
                  <div className="flex flex-row">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      height={30}
                      width={30}
                      alt="Typescript"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      height={30}
                      width={30}
                      alt="Next.js"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      height={30}
                      width={30}
                      alt="React"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                      height={30}
                      width={30}
                      alt="DigitalOcean"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      height={30}
                      width={30}
                      alt="PostgreSQL"
                    />{" "}
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      height={30}
                      width={30}
                      alt="TailwindCSS"
                    />{" "}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div>
          <p className="text-4xl text-white mt-24">
            <Link
              href="https://github.com/notblizzard"
              target="_blank"
              className="underline decoration-sky-400"
            >
              GitHub
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
