## LOTR SDK Design

The design of the module is very simple. There is one main service (the class that requests from the API) `./src/services/Base.ts`. `Base.ts` is an `abstract class` which is extended by the other services. The only differences between the services are the return types, the allowed parameters (used for filtering and sorting in query parameters), and the actual path.

The module exports the `LotrSdk` class. Once initialized, it creates an `axios` instance used to send the requests, and the instances for each service. 
