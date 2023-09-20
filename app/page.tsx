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
import {
  SiPrisma,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiNodedotjs,
  SiRedis,
  SiDigitalocean,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const sites = [
    {
      title: "antarctica",
      description: "A Twitter/Bluesky clone",
    },
    {
      title: "alaska",
      description: "A Medium clone",
    },
    {
      title: "k2",
      description: "A url shortener",
    },
    {
      title: "maryland",
      description: "An Instagram clone",
    },
  ];
  return (
    <>
      <main className="flex min-h-screen flex-col md:justify-between py-24 px-4 md:px-20 ">
        <p className="text-4xl md:text-7xl text-white">
          Hello! My name is <span className="text-sky-400">Blizzard</span> and I
          am a{" "}
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Full Stack Web Developer.{" "}
          </span>
        </p>
        <div>
          <p className="text-4xl text-white mt-24">Technologies I Use</p>
          <div className="flex flex-wrap">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiTypescript className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Typescript</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiNodedotjs className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Node</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiReact className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">React</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiNextdotjs className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Next</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiPostgresql className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Postgres</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiRedis className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Redis</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiPrisma className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Prisma</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiTailwindcss className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">Tailwind</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <SiDigitalocean className="text-white text-2xl md:text-4xl mx-1" />
                </TooltipTrigger>
                <TooltipContent side="bottom">DigitalOcean</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-4xl text-white mt-24">Projects</p>
          <div className="flex flex-wrap gap-1">
            {sites.map((site, i) => (
              <Card
                key={i}
                className="w-[33%] bg-slate-900 text-white border-none rounded-none"
              >
                <CardHeader>
                  <CardTitle>{site.title}</CardTitle>
                  <CardDescription>{site.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`https://${site.title}.notblizzard.dev`}
                    target="_blank"
                  >
                    <Image
                      src={`/${site.title}.png`}
                      width={1000}
                      height={1000}
                      alt={site.title}
                    />
                  </Link>
                </CardContent>
              </Card>
            ))}
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
