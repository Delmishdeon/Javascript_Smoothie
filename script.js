// Smoothie Class
class Smoothie {
    constructor(name, size, sizePrice, ingredients, ingredientsPrice, extras, extrasPrice, comments) {
        this.name = name;
        this.size = size;
        this.sizePrice = sizePrice;
        this.ingredients = ingredients;
        this.ingredientsPrice = ingredientsPrice;
        this.extras = extras;
        this.extrasPrice = extrasPrice;
        this.comments = comments;
        this.totalPrice = sizePrice + ingredientsPrice + extrasPrice;
    }

    display() {
        const details = document.getElementById('smoothieDetails');
        const bill = document.getElementById('smoothieBill');
        const fact = document.getElementById('smoothieFact');

        // Display smoothie details
        details.innerHTML = `
            <h2>Thank you for your order, ${this.name}!</h2>
            <p><strong>Size:</strong> ${this.size} ($${this.sizePrice})</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(', ') || 'None'} ($${this.ingredientsPrice})</p>
            <p><strong>Add-ons:</strong> ${this.extras || 'None'} ($${this.extrasPrice})</p>
            <p><strong>Special Instructions:</strong> ${this.comments || 'None'}</p>
        `;

        // Display bill
        bill.innerHTML = `<h3>Total Price: $${this.totalPrice.toFixed(2)}</h3>`;

        // Display a fun smoothie fact
        const facts = [
            "Did you know? Smoothies originated in Brazil in the 1930s!",
            "Adding spinach to your smoothie boosts your iron intake!",
            "Bananas are natural sweeteners for your smoothies!",
            "Mangoes are packed with Vitamin C – great for your skin!",
            "Blueberries are superfoods rich in antioxidants!"
        ];
        fact.innerHTML = `<p><strong>Fun Fact:</strong> ${facts[Math.floor(Math.random() * facts.length)]}</p>`;
    }
}

// Event Listener for Form Submission
document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture form values
    const name = document.getElementById('name').value;
    const sizeElement = document.querySelector('input[name="size"]:checked');
    const size = sizeElement.value;
    const sizePrice = parseFloat(sizeElement.getAttribute('data-price'));

    const ingredientsElements = Array.from(document.querySelectorAll('input[name="ingredients"]:checked'));
    const ingredients = ingredientsElements.map(input => input.value);
    const ingredientsPrice = ingredientsElements.reduce((total, input) => total + parseFloat(input.getAttribute('data-price')), 0);

    const extrasElement = document.getElementById('extras');
    const extras = extrasElement.value;
    const extrasPrice = extrasElement.selectedOptions[0] ? parseFloat(extrasElement.selectedOptions[0].getAttribute('data-price')) : 0;

    const comments = document.getElementById('comments').value;

    // Create Smoothie object
    const smoothie = new Smoothie(name, size, sizePrice, ingredients, ingredientsPrice, extras, extrasPrice, comments);
    smoothie.display();
});
