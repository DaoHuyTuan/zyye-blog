export const h1 = props => (
  <h1
    className="text-2xl font-bold mt-6 mb-4"
    {...props}
  />
)
export const h2 = props => (
  <h2
    className="text-xl font-semibold mt-5 mb-3"
    {...props}
  />
)

export const h3 = props => <h3 {...props}></h3>

export const p = props => (
  <p
    className="text-gray-700 my-4"
    {...props}
  />
)
export const a = props => (
  <a
    className="text-blue-600 hover:underline"
    {...props}
  />
)
export const ul = props => (
  <ul
    className="list-disc pl-6 my-4"
    {...props}
  />
)
export const li = props => (
  <li
    className="my-1"
    {...props}
  />
)
