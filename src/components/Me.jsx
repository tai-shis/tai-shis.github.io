function Me() {
  return (
    <div className="bg-element-bg border-2 border-border rounded-global p-6 m-element basis-full shadow-test">
      <div className="h-96 w-full">
        <div>
          <p className="text-default-text font-global text-3xl font-bold">
            Tai Shishiba
          </p>

          <span className="text-default-subtext font-global text-l hidden lg:flex">
            Bachelor of Computer Science | Mount Royal University
          </span>
          <span className="text-default-subtext font-global text-l flex lg:hidden">
            Bachelor of Computer Science
            <br />
            Mount Royal University
          </span>
        </div>
      </div>
    </div>
  );
}

export default Me;
