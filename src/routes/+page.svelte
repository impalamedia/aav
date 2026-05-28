<script>
    import { goto } from '$app/navigation';
    import Logo from '$lib/components/Logo.svelte';

    let accepted = $state(false);
</script>

<svelte:head>
    <title>AAVE Secure Access</title>
</svelte:head>

<div class="page-glow"></div>

<div class="container">
    <div class="logo">
        <Logo width="clamp(90px, 20vw, 140px)" />
    </div>

    <section class="hero">
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>

        <div class="lock">
            <div class="lock-top"></div>
            <div class="lock-body">
                <div class="keyhole"></div>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="feature">
            <div class="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                    <path d="M12 3L4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            </div>
            <p>
                Vous pénétrez à présent dans un espace numérique
                <span class="highlight">de haute sécurité</span>,
                assujetti à votre autorité souveraine et protégé par les
                standards de confidentialité les plus stricts.
            </p>
        </div>

        <div class="feature">
            <div class="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                    <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M3 21L21 3" />
                </svg>
            </div>
            <p>
                La société Aave ne se réserve, ni n'exerce,
                <span class="highlight">aucun droit de regard ou de contrôle</span>
                sur cet environnement.
            </p>
        </div>

        <div class="feature">
            <div class="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                    <path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" />
                    <path d="M12 22v-8" />
                    <path d="M19 6l-7 4-7-4" />
                </svg>
            </div>
            <p>
                L'acheminement de vos informations est
                <span class="highlight">strictement cantonné au réseau blockchain</span>
                afin de garantir l'exécution du smart contract.
            </p>
        </div>
    </section>

    <div class="trust">
        <span>Sécurité</span>
        <span>•</span>
        <span>Confidentialité</span>
        <span>•</span>
        <span>Confiance</span>
    </div>

    <section class="actions">
        <div class="checkbox">
            <input type="checkbox" id="accept" bind:checked={accepted} />
            <label for="accept">J'accepte les conditions</label>
        </div>

        <button class="btn" onclick={() => goto('/securise')} disabled={!accepted}>
            J'ACCEPTE
        </button>
    </section>
</div>

<style>
    :global(body) {
        background:
            radial-gradient(circle at top, rgba(133, 76, 255, 0.18), transparent 30%),
            linear-gradient(180deg, var(--bg2), var(--bg));
    }

    .page-glow {
        position: fixed;
        inset: 0;
        pointer-events: none;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: clamp(16px, 3vw, 40px);
        position: relative;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: clamp(24px, 4vw, 40px);
    }

    .hero {
        position: relative;
        min-height: clamp(260px, 55vw, 560px);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: clamp(10px, 3vw, 40px);
        overflow: hidden;
    }

    .circle {
        position: absolute;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.07);
    }

    .circle.one {
        width: clamp(180px, 45vw, 420px);
        height: clamp(180px, 45vw, 420px);
    }

    .circle.two {
        width: clamp(240px, 60vw, 560px);
        height: clamp(240px, 60vw, 560px);
    }

    .circle.three {
        width: clamp(320px, 78vw, 720px);
        height: clamp(320px, 78vw, 720px);
        opacity: 0.4;
    }

    .lock {
        position: relative;
        width: clamp(140px, 38vw, 300px);
        z-index: 5;
    }

    .lock-top {
        width: 50%;
        height: clamp(70px, 16vw, 140px);
        border: clamp(6px, 1vw, 10px) solid #9a72ff;
        border-bottom: none;
        border-radius: 70px 70px 0 0;
        margin: auto;
        box-shadow:
            0 0 20px rgba(138, 111, 255, 0.9),
            0 0 60px rgba(75, 199, 255, 0.3);
    }

    .lock-body {
        margin-top: -5px;
        width: 100%;
        aspect-ratio: 1.15 / 1;
        border-radius: 20px 20px 42px 42px;
        background: linear-gradient(180deg, rgba(137, 97, 255, 0.55), rgba(58, 22, 125, 0.9));
        border: 1px solid rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(20px);
        box-shadow:
            0 0 30px rgba(150, 97, 255, 0.65),
            inset 0 0 40px rgba(255, 255, 255, 0.05);
        position: relative;
    }

    .lock-body::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent);
    }

    .keyhole {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: clamp(32px, 8vw, 50px);
        height: clamp(32px, 8vw, 50px);
        border: clamp(3px, 0.6vw, 4px) solid #db83ff;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(219, 131, 255, 0.9);
    }

    .keyhole::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
        width: clamp(10px, 2vw, 14px);
        height: clamp(28px, 6vw, 42px);
        border: clamp(3px, 0.6vw, 4px) solid #db83ff;
        border-top: none;
        border-radius: 0 0 12px 12px;
    }

    .features {
        margin-top: 10px;
    }

    .feature {
        display: grid;
        grid-template-columns: 1fr;
        gap: clamp(16px, 3vw, 30px);
        padding: clamp(20px, 4vw, 32px) 0;
        border-bottom: 1px solid var(--line);
    }

    .icon {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-shrink: 0;
    }

    .icon :global(svg) {
        width: clamp(34px, 6vw, 50px);
        height: auto;
        stroke: url(#gradientStroke);
    }

    .feature p {
        font-size: clamp(0.95rem, 2vw, 1.15rem);
        line-height: 1.8;
        color: var(--muted);
        font-weight: 400;
        word-break: break-word;
    }

    .highlight {
        font-weight: 700;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .trust {
        margin-top: clamp(24px, 5vw, 40px);
        border: 1px solid rgba(169, 104, 255, 0.35);
        border-radius: 24px;
        padding: 16px 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        text-align: center;
        background: rgba(255, 255, 255, 0.02);
        box-shadow:
            inset 0 0 20px rgba(255, 255, 255, 0.02),
            0 0 20px rgba(126, 83, 255, 0.12);
    }

    .trust span {
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: clamp(0.7rem, 1.8vw, 0.85rem);
        color: rgba(255, 255, 255, 0.7);
    }

    .actions {
        margin-top: clamp(24px, 5vw, 36px);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .checkbox {
        display: flex;
        align-items: flex-start;
        gap: 14px;
    }

    .checkbox input {
        width: 24px;
        height: 24px;
        accent-color: #9f71ff;
        flex-shrink: 0;
    }

    .checkbox label {
        font-size: clamp(0.95rem, 2vw, 1rem);
        color: rgba(255, 255, 255, 0.88);
        line-height: 1.5;
    }

    .btn {
        width: 100%;
        min-height: 58px;
        padding: 16px 20px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        background: var(--gradient);
        color: #fff;
        font-size: clamp(1rem, 2vw, 1.2rem);
        font-weight: 700;
        box-shadow: 0 14px 40px rgba(155, 92, 255, 0.4);
        transition: transform 0.25s ease, opacity 0.25s ease;
    }

    .btn:hover:not(:disabled) {
        transform: translateY(-2px);
    }

    .btn:active:not(:disabled) {
        transform: scale(0.98);
    }

    .btn:disabled {
        opacity: 0.4;
        cursor: default;
    }

    @media (min-width: 481px) {
        .feature {
            grid-template-columns: 50px 1fr;
        }

        .icon {
            width: 50px;
            justify-content: center;
            padding-top: 4px;
        }

        .trust {
            border-radius: 999px;
        }

        .checkbox {
            align-items: center;
        }

        .btn {
            border-radius: 14px;
        }
    }

    @media (min-width: 768px) {
        .actions {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }

        .checkbox {
            flex: 1;
        }

        .btn {
            width: auto;
            min-width: 280px;
        }
    }

    @media (min-width: 1200px) {
        .features {
            max-width: 960px;
            margin: 0 auto;
        }

        .feature {
            grid-template-columns: 70px 1fr;
        }

        .icon {
            width: 70px;
        }
    }
</style>
