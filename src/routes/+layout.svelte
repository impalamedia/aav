<script>
    import '../app.css';

    let { children } = $props();
</script>

<svg width="0" height="0" aria-hidden="true">
    <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#43c8ff" />
            <stop offset="100%" stop-color="#d65dff" />
        </linearGradient>
    </defs>
</svg>

{@render children()}
