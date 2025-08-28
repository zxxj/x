/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';

const reviews = [
  {
    name: 'HTML5',
    username: '@HTML',
    body: '提供语义化标签和多媒体支持.',
    img: '/HTML5.svg',
  },
  {
    name: 'CSS3',
    username: '@CSS',
    body: '带来丰富的样式和动画效果.',
    img: '/CSS3.svg',
  },
  {
    name: 'JavaScript',
    username: '@JavaScript',
    body: '我最爱的编程语言.',
    img: '/JavaScript.svg',
  },
  {
    name: 'MySQL',
    username: '@MySQL',
    body: '开源的关系型数据库,以高效/稳定/易用著称,常用于网站和应用的数据存储.',
    img: '/MySQL.svg',
  },
  {
    name: 'NestJS',
    username: '@NestJS',
    body: 'NestJS是一个基于Node.js的渐进式框架,采用TypeScript构建,借鉴了Angular的模块化与依赖注入思想,专注于打造结构清晰&可扩展&易维护的服务端应用.',
    img: '/Nest.js.svg',
  },
  {
    name: 'NodeJS',
    username: '@NodeJS',
    body: 'NodeJS是一个基于ChromeV8引擎的JavaScript运行环境,让开发者可以在服务器端运行JS,常用于构建高性能的后端服务与工具.',
    img: '/Node.js.svg',
  },
  {
    name: 'NextJS',
    username: '@NextJS',
    body: 'NextJS是一个基于React的前端框架,支持SSR&SSG&和API路由,常用于快速构建高性能&SEO&友好的全栈应用.',
    img: '/Next.js.svg',
  },
  {
    name: 'Redis',
    username: '@Redis',
    body: '基于内存的高性能键值数据库,常用于缓存/消息队列和实时数据处理,特点是速度快&支持多种数据结构.',
    img: '/Redis.svg',
  },
  {
    name: 'Docker',
    username: '@Docker',
    body: '容器化平台,可以将应用及其依赖打包在轻量/可移植的容器中,实现环境一致&快速部署和隔离运行.',
    img: '/Docker.svg',
  },
  {
    name: 'React',
    username: '@React',
    body: 'React是一个由Facebook开发的JavaScript库,用于构建组件化&响应式的用户界面,擅长构建复杂且高性能的单页应用.',
    img: '/React.svg',
  },
  {
    name: 'Vue',
    username: '@Vue',
    body: 'Vue是一个渐进式前端框架,以易用&灵活&组件化为特点,适合构建响应式网页和单页应用.',
    img: '/Vue.js.svg',
  },
  {
    name: 'Vite',
    username: '@Vite',
    body: 'Vite是一个现代前端构建工具,以快速启动&即时模块热更新（HMR）为特点,支持ESM原生开发,让开发体验更高效.',
    img: '/Vite.js.svg',
  },
  {
    name: 'Tailwind CSS',
    username: '@Tailwind CSS',
    body: 'TailwindCSS是一个原子化CSS框架,通过类名直接控制样式,让开发者无需写自定义CSS,即可快速构建响应式/现代化网页界面.',
    img: '/Tailwind CSS.svg',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Marquee3D = () => {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px] bg-transparent">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default Marquee3D;
