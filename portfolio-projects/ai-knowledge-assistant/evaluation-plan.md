# AI Knowledge Assistant Evaluation Plan

## Core checks

- Retrieval quality: are the right chunks being returned
- Grounding quality: does the answer cite the right source
- Safety: does the system avoid unsupported claims
- Cost: how many tokens and calls are used per request

## Logging fields

- user question
- retrieval query
- returned chunks
- model response
- model version
- latency
- token usage

## Interview angle

Use this file to explain that the project is not only about calling an LLM API. It is about building a product workflow with evaluation, logging, and operational controls.
