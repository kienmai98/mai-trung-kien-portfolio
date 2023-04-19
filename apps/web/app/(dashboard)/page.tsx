export default function LoginPage() {
  return (
    <div className="my-20 flex items-center justify-between">
      <div className="space-y-6">
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I&apos;m Kien
        </h1>
        <div>
          <p className="text-lg opacity-80">
            This web app is being built with Next.js 13.3 & AWS.
            <br />
            I&apos;m a front-end developer with over 1 year of experience.
          </p>
        </div>
      </div>

      <div className="flex-1 text-end text-[16rem] font-extrabold">
        {String('</>')}
      </div>
    </div>
  );
}
