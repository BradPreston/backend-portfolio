export default function getAge(): number {
  // let age: number;
  // date.getMonth() > birthday.getMonth()
  //   ? age = date.getFullYear() - birthday.getFullYear()
  //   : age = (date.getFullYear() - birthday.getFullYear()) - 1;

  const date = new Date();
  const birthday = new Date('May 3, 1993');
  if (date.getMonth() > birthday.getMonth()) {
    return date.getFullYear() - birthday.getFullYear()
  } else {
    return date.getFullYear() - birthday.getFullYear() - 1
  }
}
