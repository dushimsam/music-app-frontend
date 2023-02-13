const url = "/sounds/on-notifications.mp3"

export async function play() {
    const audio = new Audio(url);
    await audio.play();
}
