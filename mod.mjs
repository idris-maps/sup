import { init } from "./init/mod.mjs";
import { build } from "./build/mod.mjs";

const help = () =>
  console.log(`
         ___                      
        F __".  _    _    _ ___   
       J (___| J |  | L  J '__ J  
       J\\___ \\ | |  | |  | |--| | 
      .--___) \\F L__J J  F L__J J 
      J\\______J\\____,__LJ  _____/L
       J______FJ____,__F|_J_____F 
                        L_J
         
        ... and your site is up

COMMANDS:

\`sup init <FOLDER>\` creates a site skeleton

\`sup build <FOLDER\>\` generates the site in <FOLDER>/dist

\`sup dev <FOLDER\>\` same as "build" but assets are not moved to dist
`);

/** @param {import('./runtime/type.ts').Runtime} runtime */
export const main = (runtime) => {
  const args = runtime.getArgs();
  const action = args[0];

  switch (action) {
    case "init":
      return init(runtime, args[1]);
    case "build":
      return build(runtime, args[1]);
    case "dev":
      return build(runtime, args[1], true);
    default:
      return help();
  }
};
