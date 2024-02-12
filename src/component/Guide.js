import "./Guide.css";

export default function Guide() {
  return (
    <>
      <h1 className="guide-tital">common service questions</h1>
      <div className="question-container">
        <div className="question">
          <p>1. *What's wrong with my car?*</p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "We'll need to perform a diagnostic to pinpoint the exact
            issue. Can you describe any symptoms you've noticed, like strange
            noises, vibrations, or warning lights?"
          </p>
        </div>
        <div className="question">
          <p>2. *How much will it cost to fix?*</p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "The cost depends on the problem and the parts and labor
            required. Once we diagnose the issue, we can provide you with an
            estimate."
          </p>
        </div>
        <div className="question">
          <p>*How long will it take to repair?*</p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "The repair time varies depending on the complexity of the
            issue and the availability of parts. We'll give you a time estimate
            once we've assessed your vehicle."
          </p>
        </div>
        <div className="question">
          <p>4. *Can you explain what needs to be done in simple terms?*</p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "Of course! We'll need to [describe the repair or
            maintenance procedure] to address the issue and ensure your vehicle
            runs smoothly."
          </p>
        </div>
        <div className="question">
          <p>5. *Are there any alternative solutions or cheaper options?*</p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "We'll explore all possible solutions and discuss them with
            you. Sometimes there are alternative parts or repair methods that
            can be more cost-effective."
          </p>
        </div>
        <div className="question">
          <p>6. *Is this repair covered by my warranty or insurance?*</p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "We can check your warranty or insurance coverage to see if
            the repair is eligible. If not, we'll provide you with a quote for
            the necessary work."
          </p>
        </div>
        <div className="question">
          <p>
            7. *Can I wait for the repair, or do I need to leave the car with
            you?*
          </p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "It depends on the repair and our current workload. Some
            repairs can be done while you wait, while others may require leaving
            your vehicle with us for a day or two."
          </p>
        </div>
        <div className="question">
          <p>
            8. *How can I prevent this issue from happening again in the
            future?*
          </p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "Regular maintenance and inspections are key to preventing
            future problems. We can recommend a maintenance schedule and provide
            tips for keeping your vehicle in top condition."
          </p>
        </div>
        <div className="question">
          <p>9. *Do you offer any warranties or guarantees on your work?*</p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "Yes, we stand behind our workmanship and offer warranties
            on parts and labor. We'll provide you with details on our warranty
            coverage before starting any repairs."
          </p>
        </div>
        <div className="question">
          <p>
            10. *Can I see the old parts or get a detailed invoice for the work
            done?*
          </p>
        </div>
        <div className="answer">
          <p>
            {" "}
            Answer: "Absolutely! We can show you the old parts and provide a
            detailed invoice outlining all the work performed, including parts
            and labor costs."
          </p>
        </div>
      </div>
    </>
  );
}
