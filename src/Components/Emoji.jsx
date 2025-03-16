
function Emoji({water, light}) {
    const tableauReference = [1, 2, 3]
    return(
        <div>
            {tableauReference.map(nombre2 => water >= nombre2 ? "💧" : null)}
            <br />
            {tableauReference.map(nombre => light >= nombre ? "🌞" : null )}
        </div>
    )
}
export default Emoji