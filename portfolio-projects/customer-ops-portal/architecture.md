# Customer Ops Portal Architecture

## Core modules

- Auth and roles
- Customer records
- Workflow tasks
- Notes and follow-ups
- Reporting dashboard

## Suggested backend entities

- User
- Customer
- Task
- TaskStatusHistory
- Note

## API direction

- `POST /auth/login`
- `GET /customers`
- `POST /customers`
- `GET /tasks`
- `POST /tasks`
- `PATCH /tasks/:id/status`
- `POST /tasks/:id/notes`
- `GET /reports/overview`

## Interview angle

Explain how the data model supports real business workflows, how auditability is preserved, and why this is a realistic SME software scope rather than a toy demo.
