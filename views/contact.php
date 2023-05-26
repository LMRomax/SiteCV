<section id="contact" class="container section-wrapper">
    <h1 class="big-title big--title-m32">
        Contact
    </h1>

    <div class="social-network--contact">
        <p>
            Vous pouvez me contacter sur ces réseaux :
        </p>

        <div class="social-network--contact-button">
            <a href="https://www.malt.fr/profile/maxencelemaitre" class="malt-link">
                Malt
            </a>
            <a href="https://www.linkedin.com/in/maxence-lemaitre-100a96164/" class="linkedin-link">
                Linkedin
            </a>
        </div>
    </div>

    <div class="block-contact">
        <p>
            Sinon utilisez ce formulaire de contact :
        </p>
        <div class="block-card-contact">
            <form action="controller/mailsender.php" method="post">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="name_input">Nom</label>
                        <input type="text" id="name_input" class="form-control" name="name" required>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="firstname_input">Prénom</label>
                        <input type="text" id="firstname_input" class="form-control" name="firstname" required>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="email_input">E-mail</label>
                        <input type="text" id="email_input" class="form-control" name="email" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="phone_input">Téléphone</label>
                        <input type="text" id="phone_input" class="form-control" name="phone" required>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label for="message_input">Message</label>
                        <textarea name="message" id="message_input" required></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-12">
                        <div class="g-recaptcha" data-sitekey="6Lfi8EEmAAAAADHm0xYEs7z1Yc1d3-hCDx-lm70b"></div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group--submit col-md-12">
                        <button type="submit" class="submit-contact">
                            Envoyer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>