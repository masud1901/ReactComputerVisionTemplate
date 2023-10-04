export const drawRect = (detection, ctx) => {
    detection.forEach(prediction => {
        //get prediction results
        const [x, y, width, height] = prediction['bbox'];
        const test = prediction['class'];
        const confidence = prediction['score']; // Changed from detection['class']

        //set styling
        const color = 'red';
        ctx.strokeStyle = color;
        ctx.font = '18px Arial';
        ctx.fillStyle = color;

        //draw rectangles and text
        ctx.beginPath();
        ctx.fillText(`${test}: ${confidence.toFixed(2)}`, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
}
