const checkMindboxSegment = (segmentId: string, operation: string) => {
  return new Promise((resolve, reject) => {
    window.mindbox("sync", {
      operation,
      data: {
        segmentations: [
          {
            ids: {
              externalId: segmentId,
            },
          },
        ],
      },
      onSuccess: function (response: any) {
        resolve(response);
      },
      onValidationError: function (messages: any) {
        reject(messages);
      },
      onError: function (error: any) {
        reject(error);
      },
    });
  });
};


export default checkMindboxSegment;