'use server';

export async function incrementVisitCount() {
  try {
    const response = await fetch(
      "https://api.counterapi.dev/v2/subhan-uddins-team-2785/first-counter-2785/up",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.COUNTER_API_KEY}`
        }
      }
    );

    if (!response.ok) {
      // If increment fails (e.g. rate limit), try to get the current count
      const getResponse = await fetch("https://api.counterapi.dev/v2/subhan-uddins-team-2785/first-counter-2785");
      if (getResponse.ok) {
        const data = await getResponse.json();
        return { count: data?.data?.up_count ?? 0 };
      }
      throw new Error(`External API returned ${response.status}`);
    }

    const data = await response.json();
    return {
      count: data?.data?.up_count ?? 0,
    };
  } catch (error) {
    console.error("API Error:", error);
    return { error: "Failed to fetch visit count", count: 0 };
  }
}

export async function getVisitorStats() {
  try {
    const response = await fetch("https://api.counterapi.dev/v2/subhan-uddins-team-2785/first-counter-2785");

    if (!response.ok) {
      throw new Error(`Upstream API failed: ${response.status}`);
    }

    const data = await response.json();
    return {
      uniqueVisitors: data?.data?.up_count ?? 0
    };
  } catch (error) {
    console.error("Stats error:", error);
    return { error: "Failed to fetch stats", uniqueVisitors: 0 };
  }
}

export async function trackVisitor() {
  try {
    const response = await fetch(
      "https://api.counterapi.dev/v2/subhan-uddins-team-2785/first-counter-2785/up",
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.COUNTER_API_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Upstream API failed: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Tracking error:", error);
    return { error: "Failed to track visitor" };
  }
}