export function convertStringToData(dateString: string) {
    // 15/07/2024 19:00
    const [dia, mes, anoEHora] = dateString.split('/')
    const [ano, hora] = anoEHora.split(' ')
    const [horas, minutos] = hora.split(':')

    // Os meses em JavaScript são indexados a partir do 0
    // janeiro = 0, fevereiro = 1, etc...
    const dataConvertida = new Date(
        Number(ano),
        Number(mes) - 1,
        Number(dia),
        Number(horas),
        Number(minutos)
    )

    return dataConvertida
}