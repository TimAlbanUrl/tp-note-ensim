import { Ra as createOperatorSubscriber, Wa as noop, za as operate } from "./_resource-chunk-Db4dggj_.js";
import { t as innerFrom } from "./innerFrom-CO_u7f-l.js";
// node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
function takeUntil(notifier) {
	return operate(function(source, subscriber) {
		innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function() {
			return subscriber.complete();
		}, noop));
		!subscriber.closed && source.subscribe(subscriber);
	});
}
export { takeUntil as t };
