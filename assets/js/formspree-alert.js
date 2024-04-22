// para que no vaya a la pagina de formspree al enviar el form + alert 
// https://www.youtube.com/watch?v=qtH8PLuy1Ck -->

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        //alert('Consulta enviada ✓\n¡Te responderé pronto!')
        alert('Gracias por tu mensaje, te responderé pronto 😊')
    }
}
