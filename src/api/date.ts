

export const hourCurrent = (setHour: any) => {
  const date = new Date()
  const hours = date.getHours();
  const minutes = date.getMinutes();
  setHour(`${hours > 12 ? hours - 12 : hours === 0 ? 12 : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${hours > 12 ? 'pm' : 'am'}`)
};
 
export const dateCurrent = (setDate: any, verbose?: boolean ) => {
  const date = new Date()
  const year = date.getFullYear()
  const mounth = date.getMonth()
  const dayMounth = date.getDate()
  const day = date.getDay()
  const weenk = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const mounths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  verbose
    ? setDate(`${weenk[day]} ${dayMounth}, ${mounths[mounth]} ${year}`)
    : setDate(`${dayMounth}/${mounth}/${year}`)
};
