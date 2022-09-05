import { holy_node_script } from './holyc-interpreter/holyc-interpreter.js'

const holy = document.getElementsByTagName('holy-script')[0]
const stdout = document.createElement("p");
stdout.setAttribute('id','stdout/stderr');
holy.append(stdout)

stdout.innerText = 'STDOUT/STDERR: ' + holy_node_script(holy.textContent)


