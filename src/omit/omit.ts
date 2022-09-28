
  namespace omit {
    interface Todo {
        title: string
        description: string
        completed: boolean
      }
      
      type TodoPreview = MyOmit<Todo, 'description' | 'title'>
      
      const todo: TodoPreview = {
        completed: false,
      }
      type MyOmit<U,K extends keyof U>={
        [k in keyof U as k extends K?never:k]:U[k]
        
      }
  }