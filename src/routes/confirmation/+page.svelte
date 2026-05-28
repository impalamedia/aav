<script>
    import { goto } from '$app/navigation';
    import Logo from '$lib/components/Logo.svelte';
</script>

<svelte:head>
    <title>AAVE - Confirmation</title>
</svelte:head>

<div class="page-glow"></div>

<div class="container">
    <div class="logo">
        <Logo width="100" />
    </div>

    <div class="success-wrapper">
        <div class="firework left"></div>
        <div class="firework right"></div>
        <div class="spark one"></div>
        <div class="spark two"></div>
        <div class="spark three"></div>
        <div class="spark four"></div>
        <div class="circle-glow">
            <div class="checkmark"></div>
        </div>
    </div>

    <h1>Félicitations !</h1>

    <div class="subtitle">
        Votre smart contract
        <br />
        a bien été <strong>éditée.</strong>
    </div>

    <div class="info-card">
        <div class="clock"></div>
        <p>Vous recevrez vos fonds<br />dans un délai de <strong>24 heures.</strong></p>
    </div>

    <div class="note">
        Vous recevrez une notification par email
        <br />
        dès que le transfert sera effectué.
    </div>

    <button class="btn" onclick={() => goto('/')}>
        <div class="btn-icon"></div>
        RETOUR À L'ACCUEIL
    </button>

    <div class="footer">SÉCURITÉ • CONFIDENTIALITÉ • CONFIANCE</div>
</div>

<style>
    :global(body) {
        background:
            radial-gradient(circle at top, rgba(133, 76, 255, 0.22), transparent 28%),
            linear-gradient(180deg, #090b35 0%, #04051d 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page-glow {
        position: fixed;
        inset: 0;
        pointer-events: none;
        background:
            radial-gradient(circle at 50% 30%, rgba(0, 180, 255, 0.08), transparent 40%),
            radial-gradient(circle at center, rgba(140, 90, 255, 0.08), transparent 45%);
    }

    .container {
        width: 100%;
        max-width: 420px;
        padding: 20px 18px 28px;
        position: relative;
        z-index: 2;
        text-align: center;
    }

    .logo {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 34px;
    }

    .logo :global(svg) {
        width: 100px;
        height: auto;
    }

    .success-wrapper {
        position: relative;
        margin-bottom: 30px;
    }

    .circle-glow {
        width: 130px;
        height: 130px;
        margin: auto;
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(circle, rgba(174, 95, 255, 0.18), rgba(0, 0, 0, 0));
        border: 2px solid rgba(195, 110, 255, 0.7);
        box-shadow:
            0 0 30px rgba(170, 90, 255, 0.45),
            0 0 80px rgba(90, 140, 255, 0.18),
            inset 0 0 30px rgba(255, 255, 255, 0.03);
    }

    .circle-glow::before {
        content: "";
        position: absolute;
        width: 97px;
        height: 97px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .checkmark {
        width: 44px;
        height: 24px;
        border-left: 6px solid #55b8ff;
        border-bottom: 6px solid #c96dff;
        transform: rotate(-45deg);
        margin-top: -6px;
        filter: drop-shadow(0 0 12px rgba(170, 90, 255, 0.8));
    }

    .spark {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #8f6fff;
        border-radius: 50%;
        box-shadow: 0 0 12px currentColor;
    }

    .spark.one {
        top: 8px;
        left: 60px;
    }

    .spark.two {
        top: 30px;
        right: 50px;
        background: #46c7ff;
    }

    .spark.three {
        bottom: 12px;
        left: 40px;
        background: #d96cff;
    }

    .spark.four {
        bottom: 20px;
        right: 40px;
        background: #4ec6ff;
    }

    .firework {
        position: absolute;
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    .firework::before,
    .firework::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 2px dashed rgba(170, 100, 255, 0.5);
    }

    .firework.left {
        top: -10px;
        left: 30px;
    }

    .firework.right {
        top: -10px;
        right: 30px;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 24px;
        background: linear-gradient(90deg, #4bc7ff 0%, #d96cff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        font-size: 1.55rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.88);
        margin-bottom: 34px;
        font-weight: 300;
    }

    .subtitle strong {
        font-weight: 600;
        background: linear-gradient(90deg, #48c7ff 0%, #d96cff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .info-card {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 18px;
        border-radius: 16px;
        border: 1px solid rgba(140, 90, 255, 0.35);
        background: rgba(255, 255, 255, 0.03);
        margin-bottom: 26px;
        text-align: left;
    }

    .clock {
        width: 38px;
        min-width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 2px solid #7c6cff;
        position: relative;
        box-shadow: 0 0 16px rgba(130, 100, 255, 0.35);
    }

    .clock::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 10px;
        background: white;
        left: 50%;
        top: 8px;
        transform: translateX(-50%);
    }

    .clock::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 2px;
        background: white;
        left: 50%;
        top: 50%;
        transform: translateY(-50%);
    }

    .info-card p {
        font-size: 0.95rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.82);
    }

    .info-card strong {
        color: #7fc8ff;
        font-weight: 600;
    }

    .note {
        font-size: 0.8rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.45);
        margin-bottom: 34px;
    }

    .btn {
        width: 100%;
        height: 56px;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        background: linear-gradient(90deg, #49baff 0%, #7d68ff 45%, #d45eff 100%);
        color: white;
        font-size: 0.95rem;
        font-weight: 600;
        letter-spacing: 0.8px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        box-shadow: 0 14px 40px rgba(140, 80, 255, 0.28);
        transition: 0.25s;
    }

    .btn:hover {
        transform: translateY(-2px);
    }

    .btn-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.8);
        position: relative;
    }

    .btn-icon::before {
        content: "";
        position: absolute;
        width: 7px;
        height: 7px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(45deg);
        left: 6px;
        top: 4px;
    }

    .footer {
        margin-top: 28px;
        font-size: 0.7rem;
        letter-spacing: 3px;
        color: rgba(255, 255, 255, 0.45);
        text-transform: uppercase;
    }

    @media (min-width: 481px) {
        .container {
            padding: 28px 24px 34px;
        }

        .logo :global(svg) {
            width: 130px;
        }

        .circle-glow {
            width: 150px;
            height: 150px;
        }

        .circle-glow::before {
            width: 112px;
            height: 112px;
        }

        h1 {
            font-size: 3rem;
        }

        .subtitle {
            font-size: 1.9rem;
        }

        .btn {
            height: 62px;
            font-size: 1rem;
        }
    }
</style>
