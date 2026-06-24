import { stdin as input, stdout as output } from "node:process";

async function main() {
  const url =
    "https://arfp.github.io/tp/web/javascript2/03-employees/employees.json";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();

    const employeeslist = [];

    resultat.data.forEach((emp) => {
      const [first_name, ...last_nameparts] = emp.employee_name.split(" ");
      const last_name = last_nameparts.toString();
      const salary = emp.employee_salary / 12;

      const employeesobject = {
        id: emp.id,
        full_name: emp.employee_name,
        email: `${first_name[0].toLowerCase()}.${last_name.toLowerCase()}@email.com`,
        income_monthly: Math.round(salary),
        year_of_birth: new Date().getFullYear() - emp.employee_age,
      };
      employeeslist.push(employeesobject);
    });

    console.table(employeeslist);
  } catch (error) {
    console.error(error.message);
  }
}
await main();
