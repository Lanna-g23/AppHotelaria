export default function RoomsInfo(){

    const divPri = document.createElement('div');
    divPri.className = 'DivPrincipal';
    divPri.style.padding = '20px 30px';
    divPri.style.width = '83%';
    divPri.style.marginLeft = '95px';
    divPri.style.borderRadius = '10px';
    divPri.style.display = 'flex';
    divPri.style.justifyContent = 'space-between';
    divPri.innerHTML = `
    <table class="table table-borderless">
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
        </tr>
        </tbody>
    </table>
    `;
    return divPri;

}   