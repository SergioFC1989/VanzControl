export const dataToDataTable = (data) =>
  Object.keys(data.reduce((acc, value) => ({ ...acc, ...value }), {})).map(
    key => ({
      property: key,
      header: HumanText(key),
      align: 'center',
    })
  );

const HumanText = data => {
  let replace = data.replace(/[^a-zA-Z 0-9.]+/g,' ');
  let finalText = replace.charAt(0).toUpperCase()+replace.slice(1);
  return finalText;
}
    
export const optionsStartShift = [
  "Excelente",
  "Normal",
  "Deficiente",
]   