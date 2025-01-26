export default async function handler(_req, res) {
  try {
    const response = await fetch(
      "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    );

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("API response is not JSON");
    }

    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
}
