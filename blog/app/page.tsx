import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/magicui/terminal';
import Marquee3D from '@/components/Marquee3D';
import { Highlighter } from '@/components/magicui/highlighter';
import { TextReveal } from '@/components/magicui/text-reveal';
import { ArcTimeline } from '@/components/magicui/arc-timeline';

export default function Page() {
  const data = [
    {
      time: '2025',
      steps: [
        {
          icon: <span>🚀</span>,
          content: '先弄个时间线出来吧,还没确定在这里放什么',
        },
        { icon: <span>✨</span>, content: '' },
      ],
    },
    {
      time: '2026',
      steps: [{ icon: <span>📈</span>, content: 'Growth' }],
    },
  ];
  return (
    <div className="relative z-[30] w-full h-full">
      <div className="flex justify-center items-center mt-[20px]">
        <p>
          Small improvements{' '}
          <Highlighter action="underline" color="#FF9800">
            every day
          </Highlighter>{' '}
          lead to{' '}
          <Highlighter action="highlight" color="#87CEFA">
            big results
          </Highlighter>{' '}
          over time.
        </p>
      </div>

      <div className="w-full h-full flex justify-center mt-6 px-5 md:px-5 lg:px-0 ">
        <Terminal className="dark:text-[#0a0a0a] text-[#fff]">
          <TypingAnimation>👋 嗨! 我是张鑫鑫,欢迎来到我的博客.</TypingAnimation>

          <AnimatedSpan>
            🧑‍💻
            我是一名前端开发工程师,从最初自学前端技术开始,逐步形成自己的学习和探索路径.
            在不断尝试新技术&框架和工具的过程中,我习惯通过动手实践来验证理论,并通过记录和总结加深理解.
          </AnimatedSpan>

          <AnimatedSpan>
            🤔 我热衷于学习前沿技术,关注现代前端生态的最新趋势.
            包括一些热门技术栈,同时也涉及后端和全栈方向.
            通过系统化的自学和实践,我不断提升解决问题的能力和技术深度.
          </AnimatedSpan>

          <AnimatedSpan>
            ✨ 技术栈: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;前端: React Next Vue TypeScript TailwindCSS
            Vite Webpack.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;后端: Nest MySQL Prisma TypeORM Redis
            Docker等.
          </AnimatedSpan>

          <AnimatedSpan>
            📚
            同时,我正在自学英语,以便更高效地阅读英文技术文档&跟进全球前沿动态,并参与国际技术社区的交流.
            这让我能够更快速地掌握新技术,并与更广泛的开发者群体分享与学习经验.
          </AnimatedSpan>

          <AnimatedSpan>
            📜 我相信持续学习&动手实践和系统总结是成长为优秀开发者的关键.
            通过整理笔记和博客文章,我能够把零散的经验转化为系统化知识,也希望这些记录能为其他开发者提供参考和启发.
          </AnimatedSpan>

          <AnimatedSpan>
            ❤️
            我希望通过博客分享学习过程,思考方法和技术心得,为自己沉淀知识,也为其他开发者提供参考和启发.
          </AnimatedSpan>

          <AnimatedSpan>🙋‍♂️ 感谢你的访问!</AnimatedSpan>

          <TypingAnimation className="text-muted-foreground text-left ml-[100px]  lg:ml-[650px]">
            zhangxinxin 2025.8.21
          </TypingAnimation>
        </Terminal>
      </div>

      <div className="w-full h-full mt-14 px-5 md:px-5 lg:px-0">
        <Marquee3D />
      </div>

      <div className="w-full h-full">
        <TextReveal>Stay disciplined, stay hungry, never settle.</TextReveal>
      </div>

      <div className="w-full h-full">
        <ArcTimeline data={data} />;
      </div>
    </div>
  );
}
