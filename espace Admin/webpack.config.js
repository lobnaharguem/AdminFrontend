module.exports = {
    // Autres configurations de Webpack...
  
    resolve: {
      fallback: {
        util: require.resolve('util/'),
        tls: require.resolve('tls'),
        fs: require.resolve('fs'),
        net: require.resolve('net')
      }
    }
  };
  