# Stream-practice
The highWaterMark option in Node.js streams sets the size of the internal buffer, not the size of individual chunks. However, the size of the chunks indirectly depends on the buffer size because the stream tries to read or write data in chunks up to the size of the buffer.
Important events on a readable stream
-data event:emitted when new chunk of data is ready to be read
  -the event handler fn receives a single argument,which is the actual chunk of data as a Buffer object by default
-end event: emitted when there is no more data to be consumed from the stream

Important events on a writable stream
-drain event: Writable stream can receive more data
-finish event: all data has been flushed to the underlying system

