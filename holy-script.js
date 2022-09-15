import { holy_script } from './holyc-interpreter/holyc-interpreter.js'

const holy = document.getElementsByTagName('holy-script')

const stdout = document.createElement("p");
stdout.setAttribute('id','stdout/stderr');
stdout.style.cssText = 'border: 4mm ridge rgba(43, 106, 205, 0.61);'

let stdin = ''
for (const hs of holy) {
  stdin += hs.textContent
}

holy[holy.length - 1].append(stdout)

holy_script(stdin)


