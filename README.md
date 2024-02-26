# Stream-practice
The highWaterMark option in Node.js streams sets the size of the internal buffer, not the size of individual chunks. However, the size of the chunks indirectly depends on the buffer size because the stream tries to read or write data in chunks up to the size of the buffer.

Important events on a readable stream
-data event:emitted when new chunk of data is ready to be read
  -the event handler fn receives a single argument,which is the actual chunk of data as a Buffer object by default
-end event: emitted when there is no more data to be consumed from the stream

Important events on a writable stream
-drain event: Writable stream can receive more data
This event is typically used in scenarios where backpressure is applied to prevent overwhelming the writable stream's internal buffer.
When the writable stream's buffer becomes full, it temporarily stops accepting data and emits the 'drain' event once it's ready to receive more data.

-finish event: all data has been flushed to the underlying system
It's important to note that the 'finish' event does not necessarily mean that the data has been fully processed or consumed by the recipient. It simply indicates the completion of the writing operation.

Error Handling: Both readable and writable streams emit an 'error' event when an error occurs. It's crucial to handle these errors to prevent application crashes and ensure graceful handling of failures.