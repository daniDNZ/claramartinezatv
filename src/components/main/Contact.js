export default function Contact() {

    const hideAlert = () => {
        const alert = document.querySelector('.alert');
        alert.classList.remove('alert--active');
        alert.classList.remove('alert--fail');
    };

    const showAlert = () => {
        const alert = document.querySelector('.alert');
        alert.classList.add('alert--active');
        setTimeout(hideAlert, 5000);
    };

    const handleData = (d, form) => {
        const alert = document.querySelector('.alert');
        const alertText = document.querySelector('.alert__text');

        if (d.sent) {

            alertText.textContent = 'Mensaje enviado';
            form.reset();
            showAlert();

        } else {

            alert.classList.add('alert--fail');
            alertText.textContent = 'Algo ha ido mal...';
            showAlert();
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const fData = new FormData(form);

        const config = {
            method: form.method,
            body: fData
        };

        const request = new Request('https://www.danisanzdev.com/sendbymail.php', config);

        fetch(request)
            .then(response => response.json())
            .then(data => { handleData(data, form); })
            .catch(e => console.log(e));

    };

    return (
        <>
            <section id="contact" className="section contact">
                <div className="container contact__container">
                    <div className="contact__text">
                        <h3 className="h3 contact__h3">Envíame un mensaje y te contestaré lo más rápido posible</h3>
                        <p className="p contact__p">Podemos hablar de lo que quieras, me encantará leerte!</p>
                    </div>
                    <form method="post" className="form" onSubmit={handleForm} >
                        <fieldset className="form__fieldset">
                            <input type="text" name="name" id="name" placeholder="nombre" className="form__input" required />
                            <input type="email" name="email" id="email" className="form__input" placeholder="e-mail" required />
                        </fieldset>
                        <textarea name="message" id="message" cols="30" rows="5" className="form__input form__input--textarea" placeholder="mensaje" required></textarea>
                        <input type="submit" className="form__button button" value="Guau!" data-content="visit"></input>
                        <div className="alert">
                            <span className="alert__text">Algo ha ido mal...</span>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}