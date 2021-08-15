export function Greetings(): string {
  var ndate = new Date();
  var hours = ndate.getHours();
  var message =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";
  return message;
}
