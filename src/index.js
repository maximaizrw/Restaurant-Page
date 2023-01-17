
document.querySelectorAll('.btn').forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element.id);
        if (element.id === 'home') {
            document.getElementById('content').innerHTML = `<div class="saludo border-dashed border-[28px] text-primary p-24 flex flex-col items-center">
            <h1 class="text-primary text-6xl text-center p-10">BIENVENIDOS</h1>
            <p class="text-center">"Pizzas artesanales al horno de leña, hechas con ingredientes frescos y amor"</p>
            <button
                class="btn bg-primary text-secondary rounded p-2 text-center ease-out duration-300 hover:scale-125 my-10" id="menu">IR
                AL MENU</button>
        </div>`;
        location.reload();
        } else if (element.id === 'menu') {
            document.getElementById('content').innerHTML = `<div class="menu">
            <h1 class="text-primary text-6xl p-10 text-center">MENU</h1>
            <div class="flex flex-col items-center w-full">
                <div class="principal flex flex-col items-center w-3/6">
                    <h3 class="text-primary text-2xl font-bold w-full mb-5">MENU PRINCIPAL</h3>
                    <table class="table-auto w-full text-center text-primary font-light">
                        <thead>
                            <tr>
                                <th></th>
                                <th>S</th>
                                <th>M</th>
                                <th>L</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="flex flex-col items-start mb-5">
                                    <span class="border-dashed border-b-2 w-full text-left">MARGHERITA</span>
                                    <span class="font-extralight text-sm">Lots of Cheese</span>
                                </td>
                                <td>10 $</td>
                                <td>15 $</td>
                                <td>17 $</td>
                            </tr>
                            <tr>
                                <td class="flex flex-col items-start mb-5">
                                    <span class="border-dashed border-b-2 w-full text-left">MUSHROOM RIOT</span>
                                    <span class="font-extralight text-sm">Cheese, mushroom, garlic, chilli</span>
                                </td>
                                <td>13 $</td>
                                <td>17 $</td>
                                <td>20 $</td>
                            </tr>
                            <tr>
                                <td class="flex flex-col items-start mb-5">
                                    <span class="border-dashed border-b-2 w-full text-left">AMERICAN HEAT</span>
                                    <span class="font-extralight text-sm">Cheese, green, pepper, onion, baby</span>
                                </td>
                                <td>15 $</td>
                                <td>18 $</td>
                                <td>21 $</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`;
        } else if (element.id === 'contact') {
            document.getElementById('content').innerHTML = `<div class="contact">
            <div class="saludo border-dashed border-[28px] text-primary p-24 flex flex-col items-center">
                <h1 class="text-primary text-6xl text-center p-10">CONTACTO</h1>
                <p class="text-center">"280415648"</p>
                <p>Calle la de siempre</p>
            </div>

        </div>`;
        }
    });
});

