const js = { language: "loosely type", label: "difficult" };
const edu = { ...js, level: "PHp" };
const newbie = edu; // newbie sẽ trỏ đến vùng nhớ của object edu
delete edu.language; // newbie và edu đều trỏ đến cùng một vùng nhớ thì khi delete key của edu thì bên newbie cùng sẽ bị xóa
console.log(Object.keys(newbie).length);
