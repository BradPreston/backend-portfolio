export default function getYearsOfExperience(): number {
  const date = new Date()
  const startDate = new Date('July 1, 2021');
  let professionalExp: number;

  if (date.getMonth() > startDate.getMonth()) {
    professionalExp = date.getFullYear() - startDate.getFullYear()
  } else {
    professionalExp = date.getFullYear() - startDate.getFullYear() - 1;
  }

  if (date.getMonth() > 1 && date.getMonth() < 7) professionalExp += .5;

  return professionalExp;
}