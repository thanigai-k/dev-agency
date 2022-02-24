import React from "react";
import SubscribeInput from "../../molecules/SubscribeInput";

export default function Subscribe() {
  return (
    <section className="subscribe pt-15 pb-15">
      <article className="container fx">
        <div className="maxw-lg">
          <h2 className="text-lg mb-3">Stay in the loop</h2>
          <p>
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!{" "}
          </p>
        </div>
        <div>
          <SubscribeInput />
        </div>
      </article>
    </section>
  );
}
