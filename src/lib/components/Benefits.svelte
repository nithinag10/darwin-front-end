<section class="section">
    <h2>Benefits</h2>
    <div class="benefits">
        <div class="benefit">
            <h3>Benefit 1</h3>
            <p>Description of benefit 1</p>
        </div>
        <div class="benefit">
            <h3>Benefit 2</h3>
            <p>Description of benefit 2</p>
        </div>
        <div class="benefit">
            <h3>Benefit 3</h3>
            <p>Description of benefit 3</p>
        </div>
    </div>
</section>

<style>
    .benefits {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
    .benefit {
        background-color: #fff9e6;
        border: 2px solid #ffd100;
    }
    .benefit h3 {
        color: #ff6b35;
    }
</style>
